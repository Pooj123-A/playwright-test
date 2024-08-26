
import { test, expect } from "@playwright/experimental-ct-react";
import App486 from "../example/App486.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App486 />);
  await expect(component).toContainText("Learn React");
});
