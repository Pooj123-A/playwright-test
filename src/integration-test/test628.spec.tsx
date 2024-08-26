
import { test, expect } from "@playwright/experimental-ct-react";
import App628 from "../example/App628.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App628 />);
  await expect(component).toContainText("Learn React");
});
