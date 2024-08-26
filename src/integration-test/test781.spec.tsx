
import { test, expect } from "@playwright/experimental-ct-react";
import App781 from "../example/App781.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App781 />);
  await expect(component).toContainText("Learn React");
});
