
import { test, expect } from "@playwright/experimental-ct-react";
import App222 from "../example/App222.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App222 />);
  await expect(component).toContainText("Learn React");
});
