
import { test, expect } from "@playwright/experimental-ct-react";
import App2935 from "./App2935.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2935 />);
  await expect(component).toContainText("Learn React");
});
