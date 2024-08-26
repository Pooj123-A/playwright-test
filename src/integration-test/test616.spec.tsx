
import { test, expect } from "@playwright/experimental-ct-react";
import App616 from "../example/App616.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App616 />);
  await expect(component).toContainText("Learn React");
});
