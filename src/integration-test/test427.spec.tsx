
import { test, expect } from "@playwright/experimental-ct-react";
import App427 from "../example/App427.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App427 />);
  await expect(component).toContainText("Learn React");
});
