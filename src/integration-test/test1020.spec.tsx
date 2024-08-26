
import { test, expect } from "@playwright/experimental-ct-react";
import App1020 from "../example/App1020.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1020 />);
  await expect(component).toContainText("Learn React");
});
