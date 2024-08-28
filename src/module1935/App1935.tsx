
import { test, expect } from "@playwright/experimental-ct-react";
import App1935 from "./App1935.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1935 />);
  await expect(component).toContainText("Learn React");
});
