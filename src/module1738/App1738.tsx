
import { test, expect } from "@playwright/experimental-ct-react";
import App1738 from "./App1738.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1738 />);
  await expect(component).toContainText("Learn React");
});
