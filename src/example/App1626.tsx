
import { test, expect } from "@playwright/experimental-ct-react";
import App1626 from "./App1626.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1626 />);
  await expect(component).toContainText("Learn React");
});
