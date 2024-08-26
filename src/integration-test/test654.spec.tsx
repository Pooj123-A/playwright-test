
import { test, expect } from "@playwright/experimental-ct-react";
import App654 from "../example/App654.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App654 />);
  await expect(component).toContainText("Learn React");
});
