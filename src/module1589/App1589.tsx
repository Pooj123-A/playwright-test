
import { test, expect } from "@playwright/experimental-ct-react";
import App1589 from "./App1589.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1589 />);
  await expect(component).toContainText("Learn React");
});
