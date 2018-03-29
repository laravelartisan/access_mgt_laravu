/**
 * Created by hp on 11/20/2017.
 */
getSearchfieldsWithValue: function(searchField){
    for(var i in this.selection){
        if(this.selection[i].hasOwnProperty(searchField)){
            this.selectedFieldObject = this.selection[i];
            return true;
        }
    }
    return false;
},
trackSearchField: function(searchField, searchKey){
    var hasSearchField = this.getSearchfieldsWithValue(searchField);
    if(hasSearchField){
        this.selectedFieldObject[searchField] = searchKey;
    }else{
        this.selection.push({
            [searchField]:searchKey
        });
    }
    console.log(this.selection);
},

lookDeep:function(object) {
    var collection = [],
        index = 0,
        next, item;
    for (item in object) {
        if (object.hasOwnProperty(item)) {
            next = object[item];
            if (typeof next == 'object' && next != null) {
                collection[index++] = item + ':{ ' + lookdeep(next).join(', ') + '}';
            } else collection[index++] = [item + ':' + String(next)];
        }
    }
    return collection;
},

