
import { test, expect } from "@playwright/experimental-ct-react";
import App1286 from "../example/App1286.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1286 />);
  await expect(component).toContainText("Learn React");
});
