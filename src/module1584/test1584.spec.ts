
import { test, expect } from "@playwright/experimental-ct-react";
import App1584 from "./App1584.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1584 />);
  await expect(component).toContainText("Learn React");
});
