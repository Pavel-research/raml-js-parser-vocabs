import RamlWrapper = require('../artifacts/raml10parser');
import core = require("./parserCore");
import hl = require('../highLevelAST');
import Opt = require('../../Opt');
import typeSystem = require("../definition-system/typeSystem");
export declare function resolveType(p: RamlWrapper.TypeDeclaration): hl.ITypeDefinition;
export declare function runtimeType(p: RamlWrapper.TypeDeclaration): typeSystem.ITypeDefinition;
export declare function load(pth: string): core.BasicNode;
export declare function completeRelativeUri(res: RamlWrapper.Resource): string;
export declare function expandTraitsAndResourceTypes(api: RamlWrapper.Api): RamlWrapper.Api;
export declare function absoluteUri(res: RamlWrapper.Resource): string;
export declare function qName(c: core.BasicNode): string;
export declare function allTraits(a: RamlWrapper.Api): RamlWrapper.Trait[];
export declare function allResourceTypes(a: RamlWrapper.Api): RamlWrapper.ResourceType[];
export declare function relativeUriSegments(res: RamlWrapper.Resource): string[];
export declare function parentResource(method: RamlWrapper.Method): RamlWrapper.Resource;
export declare function parent(resource: RamlWrapper.Resource): RamlWrapper.Resource;
export declare function childResource(container: RamlWrapper.Resource | RamlWrapper.Api, relPath: string): RamlWrapper.Resource;
export declare function getResource(container: RamlWrapper.Api | RamlWrapper.Resource, path: string[]): RamlWrapper.Resource;
export declare function childMethod(resource: RamlWrapper.Resource, method: string): RamlWrapper.Method[];
export declare function getMethod(container: RamlWrapper.Resource | RamlWrapper.Api, path: string[], method: string): RamlWrapper.Method[];
export declare function ownerApi(method: RamlWrapper.Method | RamlWrapper.Resource): RamlWrapper.Api;
export declare function methodId(method: RamlWrapper.Method): string;
export declare function isOkRange(response: RamlWrapper.Response): boolean;
export declare function allResources(api: RamlWrapper.Api): RamlWrapper.Resource[];
export declare function matchUri(apiRootRelativeUri: string, resource: RamlWrapper.Resource): Opt<ParamValue[]>;
export declare function schema(body: RamlWrapper.TypeDeclaration, api: RamlWrapper.Api): Opt<SchemaDef>;
/**
 * __$helperMethod__ Retrieve an ordered list of all uri parameters including those which are not described in the `uriParameters` node.
 * Consider a fragment of RAML specification:
 * ```yaml
 * /resource/{objectId}/{propertyId}:
 *   uriParameters:
 *     objectId:
 * ```
 * Here `propertyId` uri parameter is not described in the `uriParameters` node.
 * Thus, it is not among Resource.uriParameters(), but it is among Resource.allUriParameters().
 * __$meta__={"name":"allUriParameters"}
 **/
export declare function uriParameters(resource: RamlWrapper.Resource): RamlWrapper.TypeDeclaration[];
/**__$helperMethod__
 * Retrieve an ordered list of all base uri parameters regardless of whether they are described in `baseUriParameters` or not
 * Consider a fragment of RAML specification:
 * ```yaml
 * version: v1
 * baseUri: https://{organization}.example.com/{version}/{service}
 * baseUriParameters:
 *   service:
 * ```
 * Here `version` and `organization` are base uri parameters which are not described in the `baseUriParameters` node.
 * Thus, they are not among `Api.baseUriParameters()`, but they are among `Api.allBaseUriParameters()`.
 * __$meta__={"name":"allBaseUriParameters"}
 **/
export declare function baseUriParameters(api: RamlWrapper.Api): RamlWrapper.TypeDeclaration[];
/**__$helperMethod__
 * Retrieve an ordered list of all absolute uri parameters. Returns a union of `Api.allBaseUriParameters()`
 * for `Api` owning the `Resource` and `Resource.allUriParameters()`.
 */
export declare function absoluteUriParameters(res: RamlWrapper.Resource): RamlWrapper.TypeDeclaration[];
/**
 * __$helperMethod__ Protocols used by the API. Returns the `protocols` property value if it is specified.
 * Otherwise, returns protocol, specified in the base URI.
 **/
export declare function allProtocols(api: RamlWrapper.Api): string[];
export declare class HelperUriParam implements RamlWrapper.TypeDeclaration {
    private _name;
    private _parent;
    constructor(_name: string, _parent: core.BasicNode);
    wrapperClassName(): string;
    kind(): string;
    name(): string;
    "type"(): string[];
    location(): RamlWrapper.ModelLocation;
    locationKind(): RamlWrapper.LocationKind;
    "default"(): string;
    xml(): any;
    runtimeType(): any;
    sendDefaultByClient(): boolean;
    example(): string;
    schema(): string;
    formParameters(): RamlWrapper.TypeDeclaration[];
    examples(): RamlWrapper.ExampleSpec[];
    repeat(): boolean;
    enum(): string[];
    collectionFormat(): string;
    required(): boolean;
    readOnly(): boolean;
    facets(): any[];
    scope(): string[];
    displayName(): string;
    description(): RamlWrapper.MarkdownString;
    annotations(): RamlWrapper.AnnotationRef[];
    usage(): any;
    parent(): core.BasicNode;
    highLevel(): hl.IHighLevelNode;
    errors(): core.RamlParserError[];
    definition(): any;
    runtimeDefinition(): any;
    toJSON(): any;
}
export declare class SchemaDef {
    private _content;
    private _name;
    constructor(_content: string, _name?: string);
    name(): string;
    content(): string;
}
export declare class ParamValue {
    key: string;
    value: any;
    constructor(key: string, value: any);
}
