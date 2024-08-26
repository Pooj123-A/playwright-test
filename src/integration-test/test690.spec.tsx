
import { test, expect } from "@playwright/experimental-ct-react";
import App690 from "../example/App690.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App690 />);
  await expect(component).toContainText("Learn React");
});
