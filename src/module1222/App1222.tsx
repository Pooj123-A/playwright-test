
import { test, expect } from "@playwright/experimental-ct-react";
import App1222 from "./App1222.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1222 />);
  await expect(component).toContainText("Learn React");
});
