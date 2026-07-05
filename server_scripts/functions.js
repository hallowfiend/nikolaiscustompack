function items(item,count,nbt){
    count = typeof count != "undefined"?count:false
    nbt = typeof nbt != "undefined"?nbt:false

    let count_form_key = {}
    let nbt_form_key = {}
    let nbt_type_form_key = {}

    if(count != false){
        count_form_key = "count"
    }

    if(nbt != false){
        nbt_form_key = "nbt",
        nbt_type_form_key = 'type'
    }

    let items = {
        "item":item
    }

    Object.defineProperty(items,count_form_key,{value:count,writable:true,enumerable:true,configurable:true})
    if(nbt != false){
        Object.defineProperty(items,nbt_form_key,{value:nbt,writable:true,enumerable:true,configurable:true})
        Object.defineProperty(items,nbt_type_form_key,{value:"forge:nbt",writable:true,enumerable:true,configurable:true})
    }

    return items
}

function tags(tag,count,nbt){
    count = typeof count != "undefined"?count:false
    nbt = typeof nbt != "undefined"?nbt:false

    let count_form_key = {}
    let nbt_form_key = {}

    if(count != false){
        count_form_key = "count"
    }

    if(nbt != false){
        nbt_form_key = "forge:nbt"
    }

    let tags = {
        "tag":tag
    }

    if(count != false)
    Object.defineProperty(tags,count_form_key,{value:count,writable:true,enumerable:true,configurable:true})

    if(nbt != false)
    Object.defineProperty(tags,nbt_form_key,{value:nbt,writable:true,enumerable:true,configurable:true})
    
    return tags
}