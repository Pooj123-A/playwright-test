
import { test, expect } from "@playwright/experimental-ct-react";
import App1079 from "../example/App1079.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1079 />);
  await expect(component).toContainText("Learn React");
});
