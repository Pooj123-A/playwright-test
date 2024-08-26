
import { test, expect } from "@playwright/experimental-ct-react";
import App300 from "../example/App300.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App300 />);
  await expect(component).toContainText("Learn React");
});
