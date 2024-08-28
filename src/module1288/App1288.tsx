
import { test, expect } from "@playwright/experimental-ct-react";
import App1288 from "./App1288.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1288 />);
  await expect(component).toContainText("Learn React");
});
