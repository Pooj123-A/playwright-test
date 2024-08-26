
import { test, expect } from "@playwright/experimental-ct-react";
import App1422 from "../example/App1422.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1422 />);
  await expect(component).toContainText("Learn React");
});
