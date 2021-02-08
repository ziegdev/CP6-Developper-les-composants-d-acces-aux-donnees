label:
    id: INTEGER PRIMARY KEY
    name: TEXT
    color: TEXT
    created_at: TIMESTAMPTZ
    updated_at: TIMESTAMPTZ
    
card:
    id: INTEGER PRIMARY KEY
    name: TEXT
    content: TEXT
    position: INTEGER(anciennement order)
    color: TEXT
    list_id: INTEGER
    created_at: TIMESTAMPTZ
    updated_at: TIMESTAMPTZ

list:
    id: INTEGER PRIMARY KEY
    name: TEXT
    position: INTEGER
    created_at: TIMESTAMPTZ
    updated_at: TIMESTAMPTZ

card_has_label:
    card_id: INTEGER 
    label_id: INTEGER
    created_at: TIMESTAMPTZ
    // on met pas de updated_at car cette relation ne s'updatera jamais