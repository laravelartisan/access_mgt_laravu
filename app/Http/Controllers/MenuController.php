<?php

namespace App\Http\Controllers;

use App\Http\Resources\MenuCollection;
use App\Http\Resources\MenuResource;
use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller
{

    private $newRow;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        return new MenuCollection(Menu::withTrashed()->get());
        return new MenuCollection(Menu::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        DB::transaction(function()use($request){
            $menuNum = Menu::withTrashed()->max('sequence');
            $this->newRow = Menu::create([
                'menu_name' => $request->menuName,
                'module_id' => $request->module,
                'parent_menu' => $request->parentMenu,
                'menu_route_name' => $request->route,
                'sequence' => $menuNum + 1,
                'status' => $request->status,
                'created_by' => 1,
            ]);
        });


        return new MenuResource($this->newRow);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Menu $menu)
    {
        $updatedRow = $menu->update([
            'menu_name' => $request->menuName,
            'module_id' => $request->module,
            'parent_menu' => $request->parentMenu,
            'menu_route_name' => $request->route,
            'status' => $request->status,
            'updated_by' => 1,
        ]);

        return new MenuResource($menu);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Menu $menu)
    {
        if($menu->delete()){
            return response()->json(['data'=> ['deleted' => true]]);
        }
    }

    public function getMenusByModule($module, $menu = null)
    {
        if(!is_null($menu)){
            $menus = Menu::whereModuleId($module)->whereNotIn('id',[$menu])->get();
        }else{
            $menus = Menu::whereModuleId($module)->get();
        }
        return new MenuCollection($menus);
    }

    public function getChildrenMenus($parentMenuid)
    {
        return new MenuCollection(Menu::whereParentMenu($parentMenuid)->get());
    }
}
