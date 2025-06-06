function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    /*
    Calculate approximate distance between two coordinates
    */ 
    const R = 6371000; // Radius of Earth in meters
    const toRad = angle => angle * (Math.PI / 180);

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function vectorNormalize(v){
    /*
    Args:
        v:vector
    Returns:
        normalized vector tuple
    */
    const magnitude = Math.sqrt(v[0]*v[0] + v[1]*v[1]);
    return [v[0]/magnitude, v[1]/magnitude];
}

function vectorScale(v, k){
    /*
    Args: 
        v: 2 tuple vector
    Returns:
        v scaled by scalar k
    */
    return [k * v[0], k * v[1]];
}

function vectorAdd(v, w){
    /*
    Args: 
        v: 2 tuple vector
        w: 2 tuple vector
    Returns:
        sum of v and w
    */
    return [v[0] + w[0], v[1] + w[1]];
}
