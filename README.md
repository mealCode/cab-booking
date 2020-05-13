### cab-booking docs

### POST `/api/booking` - create booking

**Request Body**

```
{
	"lat": "38.8803917",
	"long": "-77.0020311",
	"passengerName": "Dave"
}

```

**Request Response** 
```
{
    "booking": {
        "lat": "38.8803917",
        "long": "-77.0020311",
        "bookingId": "d8c6b54d-f7cf-4e83-b5f1-8a67a2e75478",
        "passengerName": "Dave"
    }
}
```


### GET `/api/booking` - fetch booking

**Request Body**
```
n/a
```


**Request Response**
```
{
    "bookings": [
        {
            "lat": "38.8803917",
            "long": "-77.0020311",
            "bookingId": "d8c6b54d-f7cf-4e83-b5f1-8a67a2e75478",
            "passengerName": "Dave"
        }
    ]
}
```

### GET `/api/cabs` - find nearby cab

**Request Body**

```
{
	"lat": "38.87681502",
	"long": "-76.9915620"
}
```

**Request Response**

```
{
    "cab": {
        "id": "c39a3247-873e-4110-963b-937873e85a63",
        "lat": "38.8768102",
        "long": "-76.9915625",
        "driverName": "Shemar"
    }
}
```
