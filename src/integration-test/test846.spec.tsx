
import { test, expect } from "@playwright/experimental-ct-react";
import App846 from "../example/App846.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App846 />);
  await expect(component).toContainText("Learn React");
});
