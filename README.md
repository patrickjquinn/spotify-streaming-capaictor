# spotify-streaming-capacitor

A

## Install

```bash
npm install spotify-streaming-capacitor
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`pause()`](#pause)
* [`play(...)`](#play)
* [`resume()`](#resume)
* [`seekTo(...)`](#seekto)
* [`getPosition()`](#getposition)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### pause()

```typescript
pause() => Promise<void>
```

--------------------


### play(...)

```typescript
play(options: { uri: string; token: string; clientId: string; positionMs: number; }) => Promise<void>
```

| Param         | Type                                                                               |
| ------------- | ---------------------------------------------------------------------------------- |
| **`options`** | <code>{ uri: string; token: string; clientId: string; positionMs: number; }</code> |

--------------------


### resume()

```typescript
resume() => Promise<void>
```

--------------------


### seekTo(...)

```typescript
seekTo(options: { position_ms: number; }) => Promise<void>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ position_ms: number; }</code> |

--------------------


### getPosition()

```typescript
getPosition() => Promise<{ position_ms: number; }>
```

**Returns:** <code>Promise&lt;{ position_ms: number; }&gt;</code>

--------------------

</docgen-api>
