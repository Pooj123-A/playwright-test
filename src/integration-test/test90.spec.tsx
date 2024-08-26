
import { test, expect } from "@playwright/experimental-ct-react";
import App90 from "../example/App90.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App90 />);
  await expect(component).toContainText("Learn React");
});
