
import { test, expect } from "@playwright/experimental-ct-react";
import App1676 from "./App1676.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1676 />);
  await expect(component).toContainText("Learn React");
});
