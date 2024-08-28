
import { test, expect } from "@playwright/experimental-ct-react";
import App1619 from "./App1619.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1619 />);
  await expect(component).toContainText("Learn React");
});
