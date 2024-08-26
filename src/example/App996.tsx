
import { test, expect } from "@playwright/experimental-ct-react";
import App996 from "./App996.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App996 />);
  await expect(component).toContainText("Learn React");
});
