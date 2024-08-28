
import { test, expect } from "@playwright/experimental-ct-react";
import App1183 from "./App1183.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1183 />);
  await expect(component).toContainText("Learn React");
});
