
import { test, expect } from "@playwright/experimental-ct-react";
import App401 from "../example/App401.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App401 />);
  await expect(component).toContainText("Learn React");
});
