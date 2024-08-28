
import { test, expect } from "@playwright/experimental-ct-react";
import App1258 from "./App1258.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1258 />);
  await expect(component).toContainText("Learn React");
});
