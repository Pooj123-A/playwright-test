
import { test, expect } from "@playwright/experimental-ct-react";
import App1192 from "./App1192.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1192 />);
  await expect(component).toContainText("Learn React");
});
