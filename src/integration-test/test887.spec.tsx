
import { test, expect } from "@playwright/experimental-ct-react";
import App887 from "../example/App887.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App887 />);
  await expect(component).toContainText("Learn React");
});
