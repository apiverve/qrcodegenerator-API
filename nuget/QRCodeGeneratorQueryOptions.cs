using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.QRCodeGenerator
{
    /// <summary>
    /// Query options for the QR Code Generator API
    /// </summary>
    public class QRCodeGeneratorQueryOptions
    {
        /// <summary>
        /// The text to encode in the QR code
        /// </summary>
        [JsonProperty("value")]
        public string Value { get; set; }

        /// <summary>
        /// The format of the QR code (e.g., png, jpg)
        /// </summary>
        [JsonProperty("format")]
        public string Format { get; set; }

        /// <summary>
        /// The margin around the QR code (in pixels)
        /// </summary>
        [JsonProperty("margin")]
        public string Margin { get; set; }
    }
}
