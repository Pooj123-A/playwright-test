
import { test, expect } from "@playwright/experimental-ct-react";
import App20 from "../example/App20.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App20 />);
  await expect(component).toContainText("Learn React");
});
