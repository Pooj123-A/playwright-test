
import { test, expect } from "@playwright/experimental-ct-react";
import App229 from "./App229.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App229 />);
  await expect(component).toContainText("Learn React");
});
