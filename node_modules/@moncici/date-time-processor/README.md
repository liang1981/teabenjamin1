# Time Zone Formatter

This module provides a simple utility function to format timestamps into a string representation for different time zones. It's designed to be easy to use for displaying dates and times in the user's local time zone or any specified time zone from around the world.

## Features

- Convert timestamps to a formatted string in various time zones.
- Supports a wide range of time zones.
- Easy to integrate into any JavaScript project.

## Installation

You can include this module in your project by copying the `formatTimestamp` function into your codebase. There is no need for npm installation as this is a standalone function.

## Usage

To use the `formatTimestamp` function, simply import it into your JavaScript file and call it with the desired timestamp and time zone.

### Parameters

- `timestamp` (required): The timestamp you want to format. This should be in milliseconds.
- `timeZone` (optional): The IANA time zone identifier string of the desired time zone. Defaults to `'Asia/Shanghai'` if not specified.

### Example

```javascript
import { formatTimestamp } from './path/to/timeZoneFormatter';

const myTimestamp = Date.now(); // or any timestamp in milliseconds
const timeZone = 'America/New_York';

const formattedDate = formatTimestamp(myTimestamp, timeZone);
console.log(formattedDate); // Outputs the formatted date and time in the specified time zone
```

## Supported Time Zones

This function supports a variety of time zones, including but not limited to:

- UTC
- Europe/London
- Europe/Berlin
- Africa/Cairo
- Asia/Beirut
- Asia/Dubai
- Asia/Karachi
- Asia/Kolkata
- Asia/Jakarta
- Asia/Shanghai
- Asia/Tokyo
- Australia/Sydney
- Pacific/Auckland
- America/Anchorage
- America/Los_Angeles
- America/Denver
- America/Chicago
- America/New_York
- America/Caracas
- America/Sao_Paulo

For a complete list of supported time zones, refer to the `TIME_ZONES` array in the source code.

## License

This project is open-sourced under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions to improve the function or extend the list of supported time zones are welcome. Please feel free to submit a pull request or open an issue.

---

This README provides a basic overview of the Time Zone Formatter module, including how to use it and the features it offers. Adjust the path in the import statement according to your project structure.
