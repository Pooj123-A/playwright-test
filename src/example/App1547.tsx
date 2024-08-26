
import { test, expect } from "@playwright/experimental-ct-react";
import App1547 from "./App1547.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1547 />);
  await expect(component).toContainText("Learn React");
});
