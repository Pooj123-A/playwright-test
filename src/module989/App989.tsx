
import { test, expect } from "@playwright/experimental-ct-react";
import App989 from "./App989.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App989 />);
  await expect(component).toContainText("Learn React");
});
