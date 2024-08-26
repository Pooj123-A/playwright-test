
import { test, expect } from "@playwright/experimental-ct-react";
import App1649 from "./App1649.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1649 />);
  await expect(component).toContainText("Learn React");
});
