
import { test, expect } from "@playwright/experimental-ct-react";
import App252 from "../example/App252.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App252 />);
  await expect(component).toContainText("Learn React");
});
