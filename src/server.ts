import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

type NetlifyHandlerContext = {
  next?: (request?: Request) => Promise<Response>;
};

export async function netlifyAppEngineHandler(
  request: Request,
): Promise<Response> {
  const context = getContext() as NetlifyHandlerContext | undefined;

  if (request.method === 'POST') {
    const contentType = request.headers.get('content-type') ?? '';
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const bodyText = await request.text();
      if (bodyText.includes('form-name=contacto') && context?.next) {
        return context.next(
          new Request(request.url, {
            method: 'POST',
            headers: request.headers,
            body: bodyText,
          }),
        );
      }
    }
  }

  const result = await angularAppEngine.handle(request, context);
  return result || new Response('Not found', { status: 404 });
}

export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
