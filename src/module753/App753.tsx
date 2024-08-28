
import { test, expect } from "@playwright/experimental-ct-react";
import App753 from "./App753.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App753 />);
  await expect(component).toContainText("Learn React");
});
