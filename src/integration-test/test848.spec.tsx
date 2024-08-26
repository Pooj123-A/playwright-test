
import { test, expect } from "@playwright/experimental-ct-react";
import App848 from "../example/App848.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App848 />);
  await expect(component).toContainText("Learn React");
});
