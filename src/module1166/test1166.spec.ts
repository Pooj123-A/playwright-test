
import { test, expect } from "@playwright/experimental-ct-react";
import App1166 from "./App1166.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1166 />);
  await expect(component).toContainText("Learn React");
});
