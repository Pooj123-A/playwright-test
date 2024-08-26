
import { test, expect } from "@playwright/experimental-ct-react";
import App521 from "../example/App521.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App521 />);
  await expect(component).toContainText("Learn React");
});
