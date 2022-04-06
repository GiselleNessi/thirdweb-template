import React from "react";
export interface SharedMediaProps {
    className?: string;
    style?: React.CSSProperties;
    width?: HTMLIFrameElement["width"];
    height?: HTMLIFrameElement["height"];
    /**
     * Require user interaction to play the media. (default false)
     */
    requireInteraction?: boolean;
    /**
     * Show the media controls (where applicable) (default false)
     */
    controls?: HTMLVideoElement["controls"];
}
/**
 *
 * The props for the {@link MediaRenderer} component.
 * @public
 */
export interface MediaRendererProps extends SharedMediaProps {
    /**
     * The media source uri.
     */
    src?: string;
    /**
     * The alt text for the media.
     */
    alt?: string;
    /**
     * The media poster image uri. (if applicable)
     */
    poster?: string;
}
/**
 * A component that renders media based on the format of the media type.
 * Handles most media types including image, audio, video, and html files.
 * Falls back to a external link if the media type is not supported.
 *
 * props: {@link MediaRendererProps}
 *
 * @example
 * Render a video hosted on ipfs
 * ```jsx
 * const Component = () => {
 *   return <MediaRenderer
 *     src="ipfs://Qmb9ZV5yznE4C4YvyJe8DVFv1LSVkebdekY6HjLVaKmHZi"
 *     alt="A mp4 video"
 *   />
 * }
 * ```
 */
export declare const MediaRenderer: React.ForwardRefExoticComponent<MediaRendererProps & React.RefAttributes<HTMLMediaElement>>;
export interface MediaType {
    url?: string;
    mimeType?: string;
}
/**
 * @param uri - the uri to resolve (can be a url or a ipfs://\<cid\>)
 * @returns the fully resolved url + mime type of the media
 *
 * @example
 * Usage with fully formed url:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("https://example.com/video.mp4");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 *
 * Usage with ipfs cid:
 * ```jsx
 * const Component = () => {
 *   const resolved = useResolvedMediaType("ipfs://QmWATWQ7fVPP2EFGu71UkfnqhYXDYH566qy47CnJDgvsd");
 *   console.log("mime type", resolved.data.mimeType);
 *   console.log("url", resolved.data.url);
 *   return null;
 * }
 * ```
 */
export declare function useResolvedMediaType(uri?: string): {
    url: string | undefined;
    mimeType: string | undefined;
};
