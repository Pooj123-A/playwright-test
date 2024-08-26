
import { test, expect } from "@playwright/experimental-ct-react";
import App489 from "../example/App489.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App489 />);
  await expect(component).toContainText("Learn React");
});
